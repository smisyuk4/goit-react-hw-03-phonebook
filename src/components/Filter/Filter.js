import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { IconContext } from 'react-icons';
import { RiTeamFill } from 'react-icons/ri';
import { FormWrp, LabelFilter, InputFilter, InputError } from './Filter.styled';
// import { object, string, number } from 'yup';

// function validateContact(value) {
//     console.log(value);
//     let error;
//     if (!value) {
//         error = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//         error = 'Invalid email address';
//     }
//     console.log(error);
//     return error;
// }

export const Filter = ({ filterContact, filter }) => {
    return (
        <Formik
            initialValues={{ find: filter }}
            // validationSchema={object({
            //     find: number()
            //         .min(15, 'You need to be older than 15 to register')
            //         .required(),
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
                        // validate={validateContact}
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
