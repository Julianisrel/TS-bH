<Route exact path="/" element={Home} />
  index path (url) single slash = root path  of app 
  then define the component of that app then  element var passes any jsx you want . 



  <!-- css styles for use -  -->
  nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #efefef;
  margin-bottom: 32px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
}

transtion property- makes a it so en alalent will slowly change. 
--------------------------------------------------------------------------



  left: ${({ display }) => (display ? '0' : '-5000px')};

<!-- if its displayed I want it to be 0 and if not negative 5000  -->