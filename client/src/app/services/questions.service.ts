import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  public questions = [
    {
      question_id: 1,
      question:
        'Which one of the following can be considered as the class of computer threats?',
      options: ['Dos Attack', 'Phishing', 'Soliciting', 'Both A and C'],
      correct_option: 'Both A and C',
    },
    {
      question_id: 2,
      question:
        'In system hacking, which of the following is the most crucial activity?',
      options: [
        'Information gathering',
        'Covering tracks',
        'Cracking passwords',
        'None of the above',
      ],
      correct_option: 'Covering tracks',
    },
    {
      question_id: 3,
      question:
        "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
      options: [
        'Piracy',
        'Plagiarism',
        'Intellectual property rights',
        'All of the above',
      ],
      correct_option: 'Plagiarism',
    },
    {
      question_id: 4,
      question:
        'Which of the following refers to exploring the appropriate, ethical behaviors related to the online environment and digital media platform?',
      options: ['Cyber low', 'Cyberethics', 'Cybersecurity', 'Cybersafety'],
      correct_option: 'Cyberethics',
    },
    {
      question_id: 5,
      question:
        'Which of the following refers to the violation of the principle if a computer is no more accessible?',
      options: [
        'Access control',
        'Confidentiality',
        'Availability',
        'All of the above',
      ],
      correct_option: 'Availability',
    },
    {
      question_id: 6,
      question:
        'Which one of the following refers to the technique used for verifying the integrity of the message?',
      options: [
        'Digital signature',
        'Decryption algorithm',
        'Protocol',
        'Message Digest',
      ],
      correct_option: 'Digital signature',
    },
    {
      question_id: 7,
      question:
        'Which of the following can be considered as the elements of cybersecurity?',
      options: [
        'Application Security',
        'Operational Security',
        'Network Security',
        'All of the above',
      ],
      correct_option: 'All of the above',
    },
    {
      question_id: 8,
      question:
        'Which one of the following is also referred to as malicious software?',
      options: ['Maliciousware', 'Badware', 'Ilegalware', 'Malware'],
      correct_option: 'Malware',
    },
    {
      question_id: 9,
      question: 'When was the first computer virus created?',
      options: ['1970', '1971', '1972', '1969'],
      correct_option: '1971',
    },
    {
      question_id: 10,
      question:
        'Which one of the following statements is correct about Email security in the network security methods?',
      options: [
        'One has to deploy hardware, software, and security procedures to lock those apps down.',
        'One should know about what the normal behavior of a network looks like so that he/she can spot any changes, breaches in the behavior of the network.',
        'Phishing is one of the most commonly used methods that are used by hackers to gain access to the network',
        'All of the above',
      ],
      correct_option: 'All of the above',
    },
    {
      question_id: 11,
      question:
        'Which of the following malware types allows the attacker to access the administrative controls and enables him/her to do almost anything he wants to do with the infected computers?',
      options: ['RATs', 'Worms', 'Rootkits', 'Botnets'],
      correct_option: 'Rootkits',
    },
  ];
  constructor(private http: HttpClient) {}

  getQuestions() {
    const shuffled_questions = this.questions.sort(() => Math.random() - 0.5);
    const five_questions = shuffled_questions.slice(0, 5);
    return five_questions;
  }
}
