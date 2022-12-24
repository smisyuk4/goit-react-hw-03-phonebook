import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { IconContext } from 'react-icons';
import { RiTeamFill } from 'react-icons/ri';
import { FormWrp, LabelFilter, InputFilter, InputError } from './Filter.styled';
// import { object, string } from 'yup';
export const Filter = ({ filterContact, filter }) => {
    return (
        <Formik
            initialValues={{ find: filter }}
            // validationSchema={object({
            //     find: string(),
            // })}
        >
            <FormWrp autoComplete="off">
                <LabelFilter>
                    <IconContext.Provider value={{ className: 'global-icon' }}>
                        <RiTeamFill />
                    </IconContext.Provider>
                    Find contacts by name
                    <InputFilter
                        onChange={filterContact}
                        value={filter}
                        type="text"
                        name="find"
                    />
                    <ErrorMessage name="find" component={InputError} />
                </LabelFilter>
            </FormWrp>
        </Formik>
    );
};

Filter.propTypes = {
    filterContact: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};
