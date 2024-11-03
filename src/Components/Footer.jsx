const Footer = () => {
  return (
    <>
      <div className="text-center container mx-auto">
        <h1 className="text-4xl pb-5">Gadget Heaven</h1>
        <p className="pb-3">Leading the way in cutting-edge technology and innovation.</p>
        <hr />
      </div>
      <footer className="flex justify-around container mx-auto">
        <div className="flex flex-col gap-3 py-6">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
