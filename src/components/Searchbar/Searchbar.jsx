import { Formik, Form, Field } from 'formik';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Header}>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <Field
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
