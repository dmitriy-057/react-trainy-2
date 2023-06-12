// Сюда импортируются все компоненты
import PaintingList from "./components/PaintingList";
import Section from "./components/Section";
import paintings from "./paintings.json";

export default function App() {
return (
// в секцию импортируются компоненты которые записываются в children
<div>
    <Section title='Top week'>
    <PaintingList items={paintings}/> 
    </Section>
    <Section title='bests'>
    <PaintingList items={paintings}/> 
    </Section>
</div>
)
}

