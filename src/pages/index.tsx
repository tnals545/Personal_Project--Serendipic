import TypingEffect from "@/components/TypingEffect";
import StatusBasedAlert from "@/components/StatusBasedAlert";
import ImageSearch from "@/components/ImageSearch";
import PrevKeyword from "@/components/PrevKeyword";

const Home = () => {
  return (
    <>
      <header></header>
      <main>
        <TypingEffect />
        <ImageSearch />
        <PrevKeyword />
      </main>
      <footer>
        <StatusBasedAlert />
      </footer>
    </>
  );
};

export default Home;
