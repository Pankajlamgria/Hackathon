import "./DarkMode.scss";


// document.documentElement.setAttribute  is used to set or modify the value of the  data-theme  attribute on the root element of the HTML document. 

// 1. document.documentElement  refers to the root element of the HTML document, which is typically the  <html>  element. (changing the color of the body )

// 2.  setAttribute is a method that sets the value of the element in the document.

// By setting the  data-theme  attribute on the root element, you can apply different styles to elements based on the selected theme. This is often used in combination with CSS selectors like  [data-theme="dark"]  or  [data-theme="light"]  to apply specific styles for different themes.

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// Getting back the stored theme from local storage
const storedTheme = localStorage.getItem("theme");

// If user prefers dark and have never visited site, it will be dark for that user

// The matchMedia() method returns a MediaQueryList with the results from the query.
// The media queries of the matchMedia() method can be any of the media features of the CSS @media rule, like min-height, min-width, orientation, etc.

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// If deafult dark theme exists, defaultChecked
const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) setDark();


// On the change of the event we are changing the theme
const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return ( 
    <div className="toggle-theme-wrapper">
      <span className="toggle-icons"> 🌞 </span>
      <label htmlFor="checkbox" className="toggle-theme">
        <input
          type="checkbox"
       I   id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"> </div>
      </label>
      <span className="toggle-icons"> 🌖 </span>
    </div>
  )
}

export default DarkMode;