import Profile from './Profil/Profill';
import './App.css';

export default function App() {
  const handleName = (name) => alert("Im" ,'$ {name}');
  return (
    <div>
     <Profile
    fullName= "Adem bedoui"
    bio="Web developer in execution :rofl: "
    profession="owner of laser game monastir"
     handleName={handleName}
     />
    </div>
  );
}
