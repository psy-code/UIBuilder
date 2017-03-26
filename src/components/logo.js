import React from 'react'
import Link from '../elements/link'
import Image from '../elements/image'

const Logo = ({link, image}) => {
	return (
		<Link href={link}>
			<Image src={image}/>
		</Link>
	)
}

Logo.propTypes = {
	link: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired
}

export default Logo