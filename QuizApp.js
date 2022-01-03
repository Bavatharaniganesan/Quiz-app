import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizApp.css';

export default class extends Component {

    //initiating the local state
    state = {
        questions: {
            1: 'Who is called as the father of our nation?',
            2: 'What is the capital of India?',
            3: 'What color is the sky?',
            4: 'What color is the leaves?',
            5: 'What color is the banana?'
        },
        answers: {
            1: {
                1: 'Jawaharlal Nehru',
                2: 'Mahatma Gandhi',
                3: 'Subash Chandra Bose',
                4: 'Kunwar Singh',
            },
            2: {
                1: 'Punjab',
                2: 'Tamil NAdu',
                3: 'Kerala',
                4: 'Delhi'
            },
            3: {
                1: 'Blue',
                2: 'Yellow',
                3: 'Green',
                4: 'Orange'
            },
            4: {
                1: 'Blue',
                2: 'Yellow',
                3: 'Green',
                4: 'Orange'
            },
            5: {
                1: 'Blue',
                2: 'Yellow',
                3: 'Green',
                4: 'Orange'
            }
        },
        correctAnswers: {
            1: '2',
            2: '4',
            3: '1',
            4: '3',
            5: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0

    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    nextStep = step => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }
    render() {
        let { questions, answers, step, correctAnswer, clickedAnswer,score} = this.state;
        return (
            <div className="Content">
                {step <= Object.keys(questions).length ?
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep"
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true
                            }
                            onClick={() => this.nextStep(step)}
                        >
                            Next
                        </button>
                    </>) : (
                        <div clickedAnswer="finalPage">
                            <h1>You have completed the quiz</h1>
                            <p>Congratulations!!! Your score is: {score} of {Object.keys(questions).length}</p>  
                        </div>
                    )
                }
            </div>
        );
    }
}