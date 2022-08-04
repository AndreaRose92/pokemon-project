
import '../style/PokeDex.css'

export default function PokeDex() {
    return (
        <div>
            <table className="pokeDex">
                <tbody>
                    <tr>
                        <th id='name' colSpan="2">PokeDex</th>
                    </tr>
                    <tr>
                        <td className="dexImage" colSpan="2">
                            <img src='https://www.clipartmax.com/png/full/129-1298536_pokeball-free-icon-pokeball-icon.png' alt="Click to find more Pokemon!" />
                        </td>
                    </tr>
                    <tr>
                        <td id="moveset" colSpan="2">Move Set</td>
                    </tr>
                    <tr>
                        <td id="1" className="move">Move #1</td>
                        <td id="2" className="move">Move #2</td>
                    </tr>
                    <tr>
                        <td id="3" className="move">Move #3</td>
                        <td id="4" className="move">Move #4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}