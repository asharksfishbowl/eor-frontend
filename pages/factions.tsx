import axios from 'axios';

export async function getServerSideProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/factions`);
    const factions = res.data;

    return {
        props: {
            factions,
        },
    };
}

const Factions = ({ factions }) => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-white mb-6">Factions</h1>
            <div className="grid grid-cols-3 gap-6">
                {factions.map((faction) => (
                    <div
                        key={faction.id}
                        className="p-6 bg-gray-800 text-white rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold">{faction.name}</h2>
                        <p>{faction.description}</p>

                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-neumorphism">
                            <p>Test Here</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Factions;
