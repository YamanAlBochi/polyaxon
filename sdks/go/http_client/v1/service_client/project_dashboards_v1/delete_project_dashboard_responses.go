// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by go-swagger; DO NOT EDIT.

package project_dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// DeleteProjectDashboardReader is a Reader for the DeleteProjectDashboard structure.
type DeleteProjectDashboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteProjectDashboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteProjectDashboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteProjectDashboardNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteProjectDashboardForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteProjectDashboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteProjectDashboardDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteProjectDashboardOK creates a DeleteProjectDashboardOK with default headers values
func NewDeleteProjectDashboardOK() *DeleteProjectDashboardOK {
	return &DeleteProjectDashboardOK{}
}

/*DeleteProjectDashboardOK handles this case with default header values.

A successful response.
*/
type DeleteProjectDashboardOK struct {
}

func (o *DeleteProjectDashboardOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/dashboards/{uuid}][%d] deleteProjectDashboardOK ", 200)
}

func (o *DeleteProjectDashboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteProjectDashboardNoContent creates a DeleteProjectDashboardNoContent with default headers values
func NewDeleteProjectDashboardNoContent() *DeleteProjectDashboardNoContent {
	return &DeleteProjectDashboardNoContent{}
}

/*DeleteProjectDashboardNoContent handles this case with default header values.

No content.
*/
type DeleteProjectDashboardNoContent struct {
	Payload interface{}
}

func (o *DeleteProjectDashboardNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/dashboards/{uuid}][%d] deleteProjectDashboardNoContent  %+v", 204, o.Payload)
}

func (o *DeleteProjectDashboardNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteProjectDashboardNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteProjectDashboardForbidden creates a DeleteProjectDashboardForbidden with default headers values
func NewDeleteProjectDashboardForbidden() *DeleteProjectDashboardForbidden {
	return &DeleteProjectDashboardForbidden{}
}

/*DeleteProjectDashboardForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type DeleteProjectDashboardForbidden struct {
	Payload interface{}
}

func (o *DeleteProjectDashboardForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/dashboards/{uuid}][%d] deleteProjectDashboardForbidden  %+v", 403, o.Payload)
}

func (o *DeleteProjectDashboardForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteProjectDashboardForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteProjectDashboardNotFound creates a DeleteProjectDashboardNotFound with default headers values
func NewDeleteProjectDashboardNotFound() *DeleteProjectDashboardNotFound {
	return &DeleteProjectDashboardNotFound{}
}

/*DeleteProjectDashboardNotFound handles this case with default header values.

Resource does not exist.
*/
type DeleteProjectDashboardNotFound struct {
	Payload interface{}
}

func (o *DeleteProjectDashboardNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/dashboards/{uuid}][%d] deleteProjectDashboardNotFound  %+v", 404, o.Payload)
}

func (o *DeleteProjectDashboardNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteProjectDashboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteProjectDashboardDefault creates a DeleteProjectDashboardDefault with default headers values
func NewDeleteProjectDashboardDefault(code int) *DeleteProjectDashboardDefault {
	return &DeleteProjectDashboardDefault{
		_statusCode: code,
	}
}

/*DeleteProjectDashboardDefault handles this case with default header values.

An unexpected error response
*/
type DeleteProjectDashboardDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the delete project dashboard default response
func (o *DeleteProjectDashboardDefault) Code() int {
	return o._statusCode
}

func (o *DeleteProjectDashboardDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/dashboards/{uuid}][%d] DeleteProjectDashboard default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteProjectDashboardDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteProjectDashboardDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
