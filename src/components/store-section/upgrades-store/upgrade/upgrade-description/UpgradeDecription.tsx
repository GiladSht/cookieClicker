import { UpgradeDetails } from '../../../../../models/UpgradeModel'
import './UpgradeDescription.scss'

interface UpgradeDescriptionProps extends React.ComponentPropsWithoutRef<'div'> {
    upgradeDetails: UpgradeDetails
}

export function UpgradeDescription({upgradeDetails} : UpgradeDescriptionProps) {
 return (
    <div className='details-container'>
        
    </div>
 )
}