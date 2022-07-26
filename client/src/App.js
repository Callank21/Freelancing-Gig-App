import './App.css';
import { ProfilePage } from './components/pages/ProfilePage';

const App = () => {
	return (
		<div className="App container-app-grid">
			<ProfilePage
				image="👧"
				name="Stephanie"
				devType=" Full Stack Developer "
        education= "BA in Child Development, Certification in Web Development"
				workHistory="RUSD, Amazon, Web Development"
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
			<ProfilePage
				image="🧔"
				name="Watson"
				devType=" Full Stack Developer "
        education= "BA in Computer Science"
				workHistory=""
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
			<ProfilePage
				image="🚀"
        name="John"
				devType=" Full Stack Developer "
        education= "Certification in Web Development"
				workHistory="Rialto USD"
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
		</div>
	);
};

export default App;
