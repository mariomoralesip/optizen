
export const Section = (props) => {

    return (
        <section style={{border: '1px gray solid', margin: '2rem', padding: '1rem'}}>
            <h1>Section</h1>
         {props.children || ''}
        </section>
    );

}