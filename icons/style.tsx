const Style = ({
    fill = "#fafafa",
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill={fill}
            height="80px"
            width="80px"
            {...props}
        >
            <path d="M53 12c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H11c-2.2 0-4-1.8-4-4V16c0-2.2 1.8-4 4-4zm-30 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 48h5.66l9.13-8.43-2.28-1.95a5 5 0 0 0-6.52 0L11 43.66V47a1 1 0 0 0 1 1m41-1v-5.13l-8.78-8.07a5 5 0 0 0-6.77 0L22.08 48H52a1 1 0 0 0 1-1"></path>
        </svg>
    );
};
export default Style;
