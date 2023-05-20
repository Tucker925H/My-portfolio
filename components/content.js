import Blog from '../components/toppage/blog';
import About from '../pages/about';
import Concept from './toppage/concept';
import MainTopWrapper from './toppage/mainTopWrapper';

export default function Content({ children }) {
  return (
    <>
      <MainTopWrapper />
      <Concept />
      <Blog />
    </>
  );
}
