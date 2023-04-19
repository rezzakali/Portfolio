import toolsData from '../utils/ToolsData';
import ToolCard from './ToolCard';

function Tools() {
  return (
    <>
      <div className="mt-20 mx-auto">
        <h1 className="text-center text-3xl font-bold ">Tools</h1>
        <p className="text-center mt-5">
          My expertise is based on my experience and a wide range of tools which{' '}
          <br />I use to create the top-notch products.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {toolsData.map((data) => (
          <ToolCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default Tools;
