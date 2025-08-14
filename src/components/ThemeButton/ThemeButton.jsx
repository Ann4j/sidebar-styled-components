import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './styles'

export const ThemeButton = ({ themeName, onClick, ...props }) => {
  const isDark = themeName === 'dark'
  return (
    <Button onClick={onClick} aria-label="Toggle theme" {...props}>
      <FontAwesomeIcon icon={isDark ? 'sun' : 'moon'} />
    </Button>
  )
}

export default ThemeButton



