import faq from "../data/faq.json"
import CollapsibleContainer from "./CollapsibleContainer"
console.log(faq)

const QuestionAnswers = () => {
    return (
        <section>
            {faq.map((el) =>
                <CollapsibleContainer
                    trigger={el.trigger}
                    content={el.content}
                />
            )}
        </section>
    )
}

export default QuestionAnswers;


