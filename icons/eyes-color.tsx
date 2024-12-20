const EyesColor = ({
    fill = "#fafafa",
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill={fill}
            height="80px"
            width="80px"
            {...props}
        >
            <path d="M128 42.67C61.54 42.67 4.27 99.9 4.27 128S61.54 213.33 128 213.33 251.73 156.1 251.73 128 194.46 42.67 128 42.67m0 38.4a46.93 46.93 0 1 1 0 93.87 46.93 46.93 0 0 1 0-93.87m0 29.86a17.07 17.07 0 1 0 0 34.14 17.07 17.07 0 0 0 0-34.14"></path>
        </svg>
    );
};
export default EyesColor;
