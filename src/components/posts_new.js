import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                // onChange={field.input.onChange}
                // onFocus={field.input.onFocus}
                // onBlur={field.input.onBlur}
                    {...field.input}
                />
            </div>
        )
    }
    render() {
        return(
            <form>
{/* this Field component is used to represent the distinct input that
will be visible on screen to our users */}
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField} //takes a function
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField} //takes a function
                />
                <Field
                    label="contents"
                    name="content"
                    component={this.renderField} //takes a function
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm' // this string should be unique
})(PostsNew); 
// by doing that, we gave redux form the ability to communicate directly
// from this component to the reducer that we wired up 