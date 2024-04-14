import { Button, Timeline } from "flowbite-react";
import { useState } from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const About = () => {

  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
    return (
        <div className="mx-8 my-16">

         {/* <div className="m-20">
         <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <div>
        <h2>Data:</h2>
        <p>{inputValue}</p>
      </div>
    </div>
         </div> */}


            <Timeline>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2024</Timeline.Time>
          <Timeline.Title>Listing Animals</Timeline.Title>
          <Timeline.Body>
          he app allows shelters, rescue groups, or individual pet owners to create profiles for animals available for adoption. Each profile typically includes details such as the animals breed, age, size, temperament, health status, and photos.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>


      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2024</Timeline.Time>
          <Timeline.Title>Contact and Adoption Process</Timeline.Title>
          <Timeline.Body>
          The app provides contact information or a messaging feature for users to inquire about specific animals or express interest in adoption. It may also guide users through the adoption process, including filling out applications, scheduling meet-and-greet sessions, and completing adoption paperwork.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point className="" icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2023</Timeline.Time>
          <Timeline.Title>Community Engagement</Timeline.Title>
          <Timeline.Body>
          Some pet adoption apps foster a sense of community by allowing users to share their adoption stories, photos, and experiences. They may also feature forums, social media integration, or events such as adoption drives and fundraisers.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>


      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2023</Timeline.Time>
          <Timeline.Title>Support for Shelters and Rescue Groups</Timeline.Title>
          <Timeline.Body>
          The app may partner with animal shelters, rescue organizations, or fostering networks to showcase their available animals and facilitate adoptions. It may also provide tools for managing and promoting adoption events, fundraising campaigns, and volunteer opportunities.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>


    </Timeline>
        </div>
    );
};

export default About;