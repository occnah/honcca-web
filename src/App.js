import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import GitHubIcon from '@material-ui/icons/GitHub';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PaletteIcon from '@material-ui/icons/Palette';
import CodeIcon from '@material-ui/icons/Code';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import MailIcon from '@material-ui/icons/Mail';

import logo from './honclogov2.png';
import dashydash from './dashydash.png';
import buildit from './hqbuildit.png';
import proj2b from './proj2b.png';
import awards from './awards.png';
import monogame from './monogame-logo.png';
import csharp from './csharp-logo.png';
import photoshop from './photoshop-logo.png';
import qalle from './qalle.png';
import tim from './tim.png';
import omar from './omar.jpg';
import occnah from './occnah.png';

import { useState } from 'react';

function App() {
  return (
    <ContentPage>

      <MobileNavbar />

      <Navbar>
        <img className="honcca-logo" src={logo} />
        <NavItem text="Games" destination="#games-cc" />
        <NavItem text="About" destination="#about-cc" />
        <NavItem text="Technologies" destination="#tech-cc" />
        <NavItem text="Team" destination="#team-cc" />

        <DialogButton variant="contained" size="large" color="secondary">Contact Us</DialogButton>

        <a href="https://facebook.com" target="_blank">
          <Fab color="primary">
            <FacebookIcon />
          </Fab>
        </a>
      </Navbar>

      <ContentContainer idName="upper-cc">
        <h1 id="upper-cc-title">A Jönköping based Game Studio</h1>
      </ContentContainer>

      <ContentContainer idName="about-cc">
        <div id="about-text">
          <h1 className="title">About</h1>
          <p>Phasellus accumsan in ex at accumsan. Sed ullamcorper fermentum mauris rutrum volutpat. Suspendisse eros nibh, vehicula at commodo in, porta quis odio. Fusce ac ligula eros. Integer eleifend neque vel odio interdum, id placerat dolor pharetra. Sed tempor imperdiet sapien, at interdum diam congue at. Aliquam luctus eu mi et feugiat. Cras libero eros, dignissim ac eros vel, cursus maximus sapien.</p>
        </div>
        <div id="about-image">
          <Image type="rounded-image" identifier="awards-image" src={awards} />
        </div>
      </ContentContainer>

      <ContentContainer idName="games-cc">
        <h1 id="games-title">Games</h1>
        <div id="img-container">
          <Image type="rounded-image" identifier="game-image" src={dashydash} />
          <Image type="rounded-image" identifier="game-image" src={buildit} />
          <Image type="rounded-image" identifier="game-image" src={proj2b} />
        </div>
      </ContentContainer>

      <ContentContainer idName="tech-cc">
        <hr></hr>
        <h1 className="title">Technologies We Are Using</h1>
        <div id="tech-images">
          <Image src={csharp} className="game-image" type="tech-image" caption="C# .NET"></Image>
          <Image src={monogame} className="game-image" type="tech-image" caption="MonoGame"></Image>
          <Image src={photoshop} className="game-image" type="tech-image" caption="Adobe Photoshop"></Image>
        </div>
        <hr></hr>
      </ContentContainer>

      <ContentContainer idName="team-cc">
        <h1 className="title">Meet The Team</h1>
        <div className="staff-cards">
          <StaffCard className="staff-card" name="Ossian Stange" profession="CEO & Developer" image={occnah} link="https://github.com/occnah" />
          <StaffCard className="staff-card" name="Carl Åberg" profession="CTO & Developer" image={qalle} link="https://github.com/qalle-git" />
          <StaffCard className="staff-card" name="Tim Bergh" dislike={true} profession="Designer" designer image={tim} />
          <StaffCard className="staff-card" name="Omid Jawadi" profession="Developer" developer image={omar} />
        </div>
      </ContentContainer>

      <ContentContainer idName="footer">
        <p>&copy; Honcca Studios - {new Date().getFullYear()}</p>
      </ContentContainer>

    </ContentPage>
  );
}

function ContentPage(props) {
  return (
    <main className="content-page">
      {props.children}
    </main>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="nav-list">{props.children}</ul>
    </nav>
  );
}

function MobileNavbar(props) {

  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" id="mobile-app-bar">
        <Toolbar>
          <IconButton color="inherit" aria-label="open menu" edge="start" onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Honcca Studios
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" anchor="left" open={open}>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          {["Games", "About", "Technologies", "Team"].map((text, index) => (
            <a className="mobile-link" href={index === 0 ? "#games-cc" : index === 1 ? "#about-cc" : index === 2 ? "#tech-cc" : "#team-cc"}>
              <ListItem button key={text} onClick={closeDrawer}>
                <ListItemIcon>
                  {index === 0 ? <SportsEsportsIcon /> : index === 1 ? <InfoIcon /> : index === 2 ? <CodeIcon /> : <GroupIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
        <List>
          {["E-Mail", "Facebook"].map((text, index) => (
            <a className="mobile-link" href={index === 1 ? "https://facebook.com" : "mailto:contact@honcca.studio"} target="_blank">
              <ListItem button>
                <ListItemIcon>
                  {index === 1 ? <FacebookIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.destination}>{props.text}</a>
    </li>
  );
}

function DialogButton(props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" size="large" color="secondary" onClick={handleClickOpen}>
        {props.children}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Contact HonccaStudios"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            E-Mail: contact@honcca.studio - Facebook: @HonccaStudios
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Image(props) {
  return (
    <div>
      <img className={props.type} id={props.identifier} src={props.src}></img>
      <h2>{props.caption}</h2>
    </div>
  );
}

function ContentContainer(props) {
  return (
    <div id={props.idName} className="content-container">
      {props.children}
    </div>
  );
}

function StaffCard(props) {

  const [count, setCount] = useState(0);

  return (
    <Card className="staff-card" variant="elevation" style={{ width: 300 + 'px', textAlign: 'center' }}>
      <CardContent>
        <Image type="circle-image" src={props.image} identifier="staff-image" />
        <h1>{props.name}</h1>
        <h2>{props.profession}</h2>
      </CardContent>
      <CardActions>
        <a href={props.link} target="_blank">
          <IconButton>
            {(props.designer) ? <PaletteIcon /> : (props.developer) ? <CodeIcon /> : <GitHubIcon />}
          </IconButton>
        </a>
        <IconButton onClick={() => (props.dislike) ? setCount(count - 1) : setCount(count + 1)}>
          {(props.dislike) ? <ThumbDownIcon /> : <ThumbUpIcon />}
        </IconButton>

        <p>{count}</p>
      </CardActions>
    </Card>
  );
}

export default App;
