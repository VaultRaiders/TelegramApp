const BreastSize = ({
    fill = "#fafafa",
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            height="80px"
            width="80px"
            {...props}
        >
            <path
                fill-rule="evenodd"
                d="M11.74 17.87a6.24 6.24 0 1 1-9.9-7.6A5.8 5.8 0 0 0 3.06 6.7V4.38c0-.42.34-.75.75-.75H5.1a.75.75 0 0 1 .75.81q-.04.48-.04.96c0 4.62 2.78 8.38 6.2 8.38s6.2-3.76 6.2-8.38q0-.48-.04-.96a.75.75 0 0 1 .75-.81h1.28a.75.75 0 0 1 .75.75V6.7c0 1.29.43 2.54 1.22 3.56a6.25 6.25 0 1 1-9.9 7.6h1.86a.38.38 0 0 0 0-.75H9.88a.38.38 0 0 0 0 .75z"
                clip-rule="evenodd"
            ></path>
        </svg>
    );
};
export default BreastSize;
