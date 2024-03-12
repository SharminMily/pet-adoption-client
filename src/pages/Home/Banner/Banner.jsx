/* eslint-disable react/jsx-no-duplicate-props */
import { Carousel } from 'flowbite-react';
const Banner = () => {
    return (
        <div>
            {/* <img classNameName="w-full" src="https://i.ibb.co/LgTBx0x/photo-1560114928-40f1f1eb26a0-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" alt="photo-1560114928-40f1f1eb26a0-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0"  /> */}

            <div className="h-56 md:h-[400px] lg:h-[540px]">
      <Carousel leftControl="" rightControl="">
        <img src="https://i.ibb.co/kM3Qm6L/premium-photo-1661559017064-1f7713fa636b-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"  alt="..." />

        <img src="https://i.ibb.co/LzG1KVj/photo-1576201836106-db1758fd1c97-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="..." />

        <img src="https://i.ibb.co/k9fJgC4/photo-1581888227599-779811939961-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="..." />       

        <img src="https://i.ibb.co/BKpfTf7/premium-photo-1665296634715-99010f87bea1-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="..." />

        <img src="https://i.ibb.co/PzZ9MHp/photo-1597520633533-8e51d0786d82-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="..." />
      </Carousel>
    </div>

        </div>
    );
};

export default Banner;