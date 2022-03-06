import Collapsible from 'react-collapsible';

const CollapsibleContainer = (props) => {
    return (
        <Collapsible trigger={props.trigger}>
            <p>
                {props.content}
            </p>
        </Collapsible>
    )
}

export default CollapsibleContainer



