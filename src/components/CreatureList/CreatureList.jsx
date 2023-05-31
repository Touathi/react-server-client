import CreatureItem from "../CreatureItem/CreatureItem";

function CreatureList(props) {

        console.log(props);
    return (
        <>
        <h2>All Creatures</h2>
        <ul>
          {props.creatureList.map(creature => (
            <CreatureItem
                // PROPS
                creature={creature}
                key={creature.id}
                />
          ))}
        </ul>
        </>
    )
}

export default CreatureList