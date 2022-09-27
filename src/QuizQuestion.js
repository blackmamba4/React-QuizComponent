import React, {Component} from 'react'

class QuizQuestion extends Component {
    render (){
        return(
            <main>
                <section>
                    <p>{this.probs.quiz_quesiton.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    <li>{this.probs.quiz_questions.answer_options[0]}</li>
                </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion