import { Component, JSX } from 'solid-js';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export type LayoutTemplateProps = {
  children?: JSX.Element;
};

export const LayoutTemplate: Component<LayoutTemplateProps> = ({
  children = <></>,
}) => {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutTemplate;
