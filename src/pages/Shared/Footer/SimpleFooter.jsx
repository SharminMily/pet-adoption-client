import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const SimpleFooter = () => {
  return (
    <div>
      <Footer className="bg-fuchsia-950 text-gray-100" container>
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 text-white">
            <div>
              <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/p4z17sD/photo-1561948955-570b270e7c36-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" alt="" />
              <p className="text-xl font-semibold uppercase">Pet Adoption</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title className="text-gray-300"title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-gray-300" href="#">Flowbite</Footer.Link>
                  <Footer.Link className="text-gray-300" href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-gray-300" title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-gray-300" href="#">Github</Footer.Link>
                  <Footer.Link className="text-gray-300" href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-gray-300" title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-gray-300" href="#">Privacy Policy</Footer.Link>
                  <Footer.Link className="text-gray-300" href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright className="text-gray-300" href="#" by="Pet Adoption™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="text-gray-300" href="#" icon={BsFacebook} />
              <Footer.Icon className="text-gray-300" href="#" icon={BsInstagram} />
              <Footer.Icon className="text-gray-300" href="#" icon={BsTwitter} />
              <Footer.Icon className="text-gray-300" href="#" icon={BsGithub} />
              <Footer.Icon className="text-gray-300" href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default SimpleFooter;
