class HelloMessage extends React.Component {
    render() {
        return <div>{this.props.name} Study</div>;
    }
}

root.render(<HelloMessage name="React" />);
