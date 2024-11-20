import { useRouter } from 'next/router';
import axios from 'axios';

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/factions/${id}`);
    const faction = res.data;

    return {
        props: {
            faction,
        },
    };
}

const FactionDetails = ({ faction }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-white">{faction.name}</h1>
            <p className="text-lg mt-4">{faction.description}</p>
        </div>
    );
};

export default FactionDetails;
