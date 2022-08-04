// Imports omitted

export const ProtectedRoutes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        accessToken
    } = useSelector(state => state.auth); // Fetch access token from state

    const {
        data,
        isError
    } = useRefreshAccessTokenQuery();

    if (isError) {
        navigate('/login');
    }

    useEffect(() => {
        if (data) {
            dispatch(setCredentials(data));
        }
    }, [data, dispatch]);

    if (accessToken) return < Outlet / > ;

    return < h1 > Loading... < /h1>;
};
