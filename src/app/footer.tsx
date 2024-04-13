const Footer = () => {
  return (
    <footer id="footer" className="thisbg">
      <div className="py-24 max-w-[88rem] m-auto">
        <div className="flex flex-wrap justify-around">
          <div className="text-8xl ungai">🍣Sumo Snacks</div>
          <div>
            <div className="pb-4"> Open hours:</div>
            <div className="opacity-70">
              <div>Monday: 12:00 - 22:00</div>
              <div>Tuesday: 12:00 - 22:00</div>
              <div>Wednesday: 12:00 - 22:00</div>
              <div>Thursday: 12:00 - 22:00</div>
              <div>Friday: 12:00 - 22:00</div>
              <div>Saturday: 12:00 - 22:00</div>
              <div>Sunday: 12:00 - 22:00</div>
            </div>
          </div>
          <div>
            <div>
              <div className="pb-4">Address:</div>
              <div className="opacity-70">
                <div>1234 Sushi St.</div>
                <div>Sushi City, Sushi State</div>
                <div>123-456-7890</div>
              </div>
            </div>
            <div className="pt-5">
              <div className="pb-4">Follow us:</div>
              <div className="flex gap-4">
                <img src="/instagram.png" alt="hero" width={40} height={40} />
                <img src="/x.png" alt="hero" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
