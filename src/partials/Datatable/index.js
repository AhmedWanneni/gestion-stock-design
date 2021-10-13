import Loadable from 'react-loadable';

const Loading = () => {
    return (<h1>Loading ...</h1>)
}
export default Loadable({
  loader: () => import('./View'),
  loading: Loading,
});