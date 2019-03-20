import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import Flex from './layout/Flex'
import './Loader.css'

const Loader = props => (
  <Flex>
    <FontAwesomeIcon icon={faSpinner} spin />
  </Flex>
)

export default Loader
