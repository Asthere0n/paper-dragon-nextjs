import paperDragonLogo from "./paper-dragon-logo.png"

type Logo = {
    width: number | string,
    height: number | string
}

function Logo(props: Logo) {
    const { height, width } = props;
    return (
        <>
            <img src={paperDragonLogo.src} alt="Paper Dragon Logo" width={width} height={height} />
        </>
    );
}

export default Logo;