type ContainerProps = {
    style: React.CSSProperties
}

export const Container = ({style} :ContainerProps) => {
    return (
        <div style={style}>
            Text Here
        </div>
    )
}