import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
    color: '#6c6766',
    fontSize: '14px',
    fontWeight: 500,
    border: 'solid  #ccb68d',
    fontFamily: 'SFUIText-Regular',
  },
  label: {
    backgroundColor: '#f7f7f7',
    color: '#423b3c',
    fontSize: '14px',
    fontFamily: 'SFUIText-Regular',
    fontWeight: 500,
    borderRadius: '4px',
    border: 'solid 1.5px  #a09d9d',
  },
  times: {
    backgroundColor: '#e6e0dd',
    color: '#423b3c',
    fontFamily: 'SFUIText-Regular',
    fontSize: '14px',
  },
})

export const SearchCriteria = ({filters, clearFilter}) => {
  const classes = useStyles()

  return (
    <div className="mt-2 mb-2">
      {filters.map((filter) => {
        return (
          <Row form className="mb-2" key={filter.id}>
            <Col sm={{size: 'auto', offset: 1}} className="text-center">
              <Button
                className={`${classes.times} rounded-circle`}
                onClick={() => clearFilter(filter.id)}>
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col className={`${classes.label} p-2 mr-2 col-auto`}>{filter.field}</Col>
            <Col className={`${classes.radiusButton} px-3 py-2 mr-2 col-auto`}>
              {filter.operator}
            </Col>
            <Col className={`${classes.label} p-2 mr-2 col-auto`}>{filter.value}</Col>
          </Row>
        )
      })}
    </div>
  )
}

SearchCriteria.propTypes = {
  filters: PropTypes.array,
  clearFilter: PropTypes.func,
}

export default SearchCriteria
