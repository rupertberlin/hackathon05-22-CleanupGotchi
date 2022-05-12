import ProgressBar from 'react-bootstrap/ProgressBar'

const SatisfactionLevel = () => {
    
    return (
<div>
  <ProgressBar variant="generalSatisfaction" now={40} />
  <ProgressBar variant="food" now={20} />
  <ProgressBar variant="moving" now={60} />
  <ProgressBar variant="danger" now={80} />
</div>
)
}

export default SatisfactionLevel; 
