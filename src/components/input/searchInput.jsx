import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDebounce } from '../../hooks/useDebounce.js'
import Loading from "../../widgets/loading/loading.jsx";

const SearchInput = (props) => {
    const {
        loading= false,
        searchValue = '',
        setSearchValue = () => {},
        debounceDelay = 0,
        size = 'middle',
        placeholder = '',
        addonBefore= <SearchOutlined />,
        allowClear = false,
        onChange = () => {},
        width = { width: '100%' },
    } = props

    const debounceSearch = useDebounce(onChange, debounceDelay)

    const onInputChange = value => {
        setSearchValue(value);
        debounceSearch(value.trim());
    }

    return (
        <Input
            value={searchValue}
            onChange={e => onInputChange(e.target.value)}
            allowClear={allowClear}
            placeholder={placeholder}
            addonBefore={loading ? <Loading fontSize={14} /> : addonBefore}
            size={size}
            style={width}
        />
    )
}
export default SearchInput
