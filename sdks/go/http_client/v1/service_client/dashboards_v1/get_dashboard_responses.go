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

package dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetDashboardReader is a Reader for the GetDashboard structure.
type GetDashboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetDashboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetDashboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetDashboardNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetDashboardForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetDashboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetDashboardDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetDashboardOK creates a GetDashboardOK with default headers values
func NewGetDashboardOK() *GetDashboardOK {
	return &GetDashboardOK{}
}

/*GetDashboardOK handles this case with default header values.

A successful response.
*/
type GetDashboardOK struct {
	Payload *service_model.V1Dashboard
}

func (o *GetDashboardOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/dashboards/{uuid}][%d] getDashboardOK  %+v", 200, o.Payload)
}

func (o *GetDashboardOK) GetPayload() *service_model.V1Dashboard {
	return o.Payload
}

func (o *GetDashboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Dashboard)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetDashboardNoContent creates a GetDashboardNoContent with default headers values
func NewGetDashboardNoContent() *GetDashboardNoContent {
	return &GetDashboardNoContent{}
}

/*GetDashboardNoContent handles this case with default header values.

No content.
*/
type GetDashboardNoContent struct {
	Payload interface{}
}

func (o *GetDashboardNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/dashboards/{uuid}][%d] getDashboardNoContent  %+v", 204, o.Payload)
}

func (o *GetDashboardNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetDashboardNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetDashboardForbidden creates a GetDashboardForbidden with default headers values
func NewGetDashboardForbidden() *GetDashboardForbidden {
	return &GetDashboardForbidden{}
}

/*GetDashboardForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type GetDashboardForbidden struct {
	Payload interface{}
}

func (o *GetDashboardForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/dashboards/{uuid}][%d] getDashboardForbidden  %+v", 403, o.Payload)
}

func (o *GetDashboardForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetDashboardForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetDashboardNotFound creates a GetDashboardNotFound with default headers values
func NewGetDashboardNotFound() *GetDashboardNotFound {
	return &GetDashboardNotFound{}
}

/*GetDashboardNotFound handles this case with default header values.

Resource does not exist.
*/
type GetDashboardNotFound struct {
	Payload interface{}
}

func (o *GetDashboardNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/dashboards/{uuid}][%d] getDashboardNotFound  %+v", 404, o.Payload)
}

func (o *GetDashboardNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetDashboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetDashboardDefault creates a GetDashboardDefault with default headers values
func NewGetDashboardDefault(code int) *GetDashboardDefault {
	return &GetDashboardDefault{
		_statusCode: code,
	}
}

/*GetDashboardDefault handles this case with default header values.

An unexpected error response
*/
type GetDashboardDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get dashboard default response
func (o *GetDashboardDefault) Code() int {
	return o._statusCode
}

func (o *GetDashboardDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/dashboards/{uuid}][%d] GetDashboard default  %+v", o._statusCode, o.Payload)
}

func (o *GetDashboardDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetDashboardDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
