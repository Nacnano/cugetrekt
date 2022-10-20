interface DocumentProps {
    num: number,
}

export default function DocCard(props: DocumentProps) {
    const { num } = props;

    return (
        <h1>{num}</h1>
    );
}
