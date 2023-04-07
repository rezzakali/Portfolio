import ServiceCard from '../components/ServiceCard';
import servicesData from '../utils/ServicesData';

function Services() {
  return (
    <div className="mt-20 bg-white dark:bg-[#0e1628] ">
      <h1 className="text-[#023047] dark:text-white text-center lg:text-3xl md:text-3xl sm:text-xl font-bold">
        What I will do for you
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {servicesData.map((data) => (
          <ServiceCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Services;
