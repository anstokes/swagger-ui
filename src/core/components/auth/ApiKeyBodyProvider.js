import ApiKeyBodyContext from './ApiKeyBodyContext';

class ApiKeyBodyProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
        return (
            <ApiKeyBodyContext.Provider
                value={}
            >
                {this.props.children}
            </ApiKeyBodyContext.Provider>
        );
    }
}