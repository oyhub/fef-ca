import { FacebookRounded, Instagram } from '@mui/icons-material';

export function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white pt-4">
      <div className="container px-3">
        <div className="flex justify-between">
          <div className="font-heading text-sm p-3">
            <h2 className="uppercase text-xl pb-4">Blue Lion</h2>
            <p>Adress Road 1</p>
            <p>9999 Postalcode</p>
            <a href="#" className="block">+47 99 99 99 99</a>
            <a href="#" className="block">mail@bluelion.com</a>
          </div>
          <div className="text-5xl gap-3 flex p-3 pr-0">
            <a href="#"><FacebookRounded fontSize="inherit"/></a>
            <a href="#"><Instagram fontSize="inherit" /></a>
          </div>
        </div>
        <p className="text-2xs text-center p-2 font-heading">Blue Lion &#169; {thisYear} Org.nr 999 999 999</p>
      </div>
    </footer>
  )
}

export default Footer;