import Image from 'next/image'
import type { TwitterComponents } from 'react-tweet'
 
export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} alt='Avatar'/>,
  MediaImg: (props) => <Image {...props} fill alt='Tweet Image'/>,
}