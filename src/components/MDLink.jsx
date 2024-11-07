import MDXContent from "@theme/MDXContent"

const MDLink = ( { children}  ) => {
    const linkStyles = {
        padding: '1rem .5rem',
        border: '1px solid inherit '
    }
    return (
        <div style={linkStyles}>
            <MDXContent>
                {children}
            </MDXContent>
        </div>
    )
}

export default MDLink