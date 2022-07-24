import './App.css';
import CategoryPage from './components/pages/CategoryPage';

const App = () => {
	return (
		<div className="App container-app-grid">
			<CategoryPage
				icon="👧"
				name="Stephanie"
				devType=" Full Stack Developer "
        education= "BA in Child Development, Certification in Web Development"
				workHistory="RUSD, Amazon, Web Development "
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
			<CategoryPage
				icon="🧔"
				name="Watson"
				devType=" Full Stack Developer "
        education= "BA in Computer Science"
				workHistory=""
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
			<CategoryPage
				icon="🚀"
        name="John"
				devType=" Full Stack Developer "
        education= "Certification in Web Development"
				workHistory="Rialto USD"
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
      <CategoryPage
				icon="🚀"
        name="John"
				devType=" Full Stack Developer "
        education= "Certification in Web Development"
				workHistory="Rialto USD"
				description="From Ed to Tech"
				buttonMessage="Connect with Developer"
				wage="$40"
				linked=" "
			/>
      <CategoryPage
				icon="🚀"
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
