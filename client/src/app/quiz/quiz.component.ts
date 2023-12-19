import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainService } from '../services/main.service';
import { QuestionService } from '../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit, OnDestroy {
  public user: any;
  public questions = [] as any;
  public question_index = 0;
  private scores = 0;
  private is_correct = false;

  private timerSubscription: Subscription | undefined;
  public formattedTime: string | undefined;

  constructor(private ms: MainService, private qs: QuestionService) {
    this.user = ms.get_participant();
    if (!this.user?.email) {
      window.location.href = '/registeration';
    }
  }

  ngOnInit(): void {
    if (!this.user?.quiz_taken) {
      this.startTimer();
      this.questions = this.qs.getQuestions();
      this.question_index = 0;
    }
  }

  private startTimer(): void {
    const initialTime = 1; // starting time in seconds

    this.timerSubscription = interval(1000)
      .pipe(map((seconds) => seconds + initialTime))
      .subscribe((seconds) => {
        this.formattedTime = this.formatTime(seconds);
      });
  }

  private stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = this.padNumber(hours);
    const formattedMinutes = this.padNumber(minutes);
    const formattedSeconds = this.padNumber(remainingSeconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  next() {
    if (this.question_index < 4) {
      this.question_index = this.question_index + 1;
      if (this.is_correct) {
        this.scores = this.scores + 20;
      }
    } else {
      this.question_index = 4;
    }
  }

  answer(index: number, option: string) {
    console.log(index, option);
    this.is_correct = false;
    if (this.questions[index].correct_option === option) {
      this.is_correct = true;
    }
  }

  save_score() {
    console.log(this.formattedTime);
    if (this.is_correct) {
      this.scores = this.scores + 20;
    }
    const hours = Number(this.formattedTime?.split(':')[0]) * 60 * 60;
    const minutes = Number(this.formattedTime?.split(':')[1]) * 60;
    const total_time =
      Number(this.formattedTime?.split(':')[2]) + hours + minutes;

    const final_score = this.scores > 0 ? 10000 - total_time + this.scores : 0;

    let payload = { ...this.user, score: final_score };
    console.log(payload);

    this.ms.save_score(payload).subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem('P_DATA', JSON.stringify(res.data));
        window.location.href = '/quiz';
      }
    });
  }
}
